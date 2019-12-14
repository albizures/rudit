import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свёртывать: PerfectVerb = {
  name: Word('свёртывать', 2),
  singular1stPerson: Word('свёртываю', 2),
  singular2ndPerson: Word('свёртываешь', 2),
  singular3rdPerson: Word('свёртывает', 2),
  plural1stPerson: Word('свёртываем', 2),
  plural2ndPerson: Word('свёртываете', 2),
  plural3rdPerson: Word('свёртывают', 2),
  masculinePast: Word('свёртывал', 2),
  femininePast: Word('свёртывала', 2),
  neuterPast: Word('свёртывало', 2),
  pluralPast: Word('свёртывали', 2),
  imperativeInformal: Word('свёртывай', 2),
  imperativeFormal: Word('свёртывайте', 2),
  imperfect: [],
};

perfectVerbs.set(свёртывать.name.text, свёртывать);

export { свёртывать };