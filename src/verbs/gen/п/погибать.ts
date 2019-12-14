import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погибать: PerfectVerb = {
  name: Word('погибать', 5),
  singular1stPerson: Word('погибаю', 5),
  singular2ndPerson: Word('погибаешь', 5),
  singular3rdPerson: Word('погибает', 5),
  plural1stPerson: Word('погибаем', 5),
  plural2ndPerson: Word('погибаете', 5),
  plural3rdPerson: Word('погибают', 5),
  masculinePast: Word('погибал', 5),
  femininePast: Word('погибала', 5),
  neuterPast: Word('погибало', 5),
  pluralPast: Word('погибали', 5),
  imperativeInformal: Word('погибай', 5),
  imperativeFormal: Word('погибайте', 5),
  imperfect: ['погибнуть'],
};

perfectVerbs.set(погибать.name.text, погибать);

export { погибать };