import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свёртывать: PerfectVerb = {
  name: Word('свёртывать', 7),
  singular1stPerson: Word('свёртываю', 7),
  singular2ndPerson: Word('свёртываешь', 7),
  singular3rdPerson: Word('свёртывает', 7),
  plural1stPerson: Word('свёртываем', 7),
  plural2ndPerson: Word('свёртываете', 7),
  plural3rdPerson: Word('свёртывают', 7),
  masculinePast: Word('свёртывал', 7),
  femininePast: Word('свёртывала', 7),
  neuterPast: Word('свёртывало', 7),
  pluralPast: Word('свёртывали', 7),
  imperativeInformal: Word('свёртывай', 7),
  imperativeFormal: Word('свёртывайте', 7),
  imperfect: [],
};

perfectVerbs.set(свёртывать.name.text, свёртывать);

export { свёртывать };