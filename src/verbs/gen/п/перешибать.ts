import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешибать: PerfectVerb = {
  name: Word('перешибать', 7),
  singular1stPerson: Word('перешибаю', 7),
  singular2ndPerson: Word('перешибаешь', 7),
  singular3rdPerson: Word('перешибает', 7),
  plural1stPerson: Word('перешибаем', 7),
  plural2ndPerson: Word('перешибаете', 7),
  plural3rdPerson: Word('перешибают', 7),
  masculinePast: Word('перешибал', 7),
  femininePast: Word('перешибала', 7),
  neuterPast: Word('перешибало', 7),
  pluralPast: Word('перешибали', 7),
  imperativeInformal: Word('перешибай', 7),
  imperativeFormal: Word('перешибайте', 7),
  imperfect: [],
};

perfectVerbs.set(перешибать.name.text, перешибать);

export { перешибать };