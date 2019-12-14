import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учитывать: PerfectVerb = {
  name: Word('учитывать', 2),
  singular1stPerson: Word('учитываю', 2),
  singular2ndPerson: Word('учитываешь', 2),
  singular3rdPerson: Word('учитывает', 2),
  plural1stPerson: Word('учитываем', 2),
  plural2ndPerson: Word('учитываете', 2),
  plural3rdPerson: Word('учитывают', 2),
  masculinePast: Word('учитывал', 2),
  femininePast: Word('учитывала', 2),
  neuterPast: Word('учитывало', 2),
  pluralPast: Word('учитывали', 2),
  imperativeInformal: Word('учитывай', 2),
  imperativeFormal: Word('учитывайте', 2),
  imperfect: ['учесть'],
};

perfectVerbs.set(учитывать.name.text, учитывать);

export { учитывать };