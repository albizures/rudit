import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доигрывать: PerfectVerb = {
  name: Word('доигрывать', 2),
  singular1stPerson: Word('доигрываю', 2),
  singular2ndPerson: Word('доигрываешь', 2),
  singular3rdPerson: Word('доигрывает', 2),
  plural1stPerson: Word('доигрываем', 2),
  plural2ndPerson: Word('доигрываете', 2),
  plural3rdPerson: Word('доигрывают', 2),
  masculinePast: Word('доигрывал', 2),
  femininePast: Word('доигрывала', 2),
  neuterPast: Word('доигрывало', 2),
  pluralPast: Word('доигрывали', 2),
  imperativeInformal: Word('доигрывай', 2),
  imperativeFormal: Word('доигрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(доигрывать.name.text, доигрывать);

export { доигрывать };