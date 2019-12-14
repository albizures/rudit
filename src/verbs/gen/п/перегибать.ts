import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегибать: PerfectVerb = {
  name: Word('перегибать', 7),
  singular1stPerson: Word('перегибаю', 7),
  singular2ndPerson: Word('перегибаешь', 7),
  singular3rdPerson: Word('перегибает', 7),
  plural1stPerson: Word('перегибаем', 7),
  plural2ndPerson: Word('перегибаете', 7),
  plural3rdPerson: Word('перегибают', 7),
  masculinePast: Word('перегибал', 7),
  femininePast: Word('перегибала', 7),
  neuterPast: Word('перегибало', 7),
  pluralPast: Word('перегибали', 7),
  imperativeInformal: Word('перегибай', 7),
  imperativeFormal: Word('перегибайте', 7),
  imperfect: ['перегнуть'],
};

perfectVerbs.set(перегибать.name.text, перегибать);

export { перегибать };