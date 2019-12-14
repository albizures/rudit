import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибиваться: PerfectVerb = {
  name: Word('прибиваться', 6),
  singular1stPerson: Word('прибиваюсь', 6),
  singular2ndPerson: Word('прибиваешься', 6),
  singular3rdPerson: Word('прибивается', 6),
  plural1stPerson: Word('прибиваемся', 6),
  plural2ndPerson: Word('прибиваетесь', 6),
  plural3rdPerson: Word('прибиваются', 6),
  masculinePast: Word('прибивался', 6),
  femininePast: Word('прибивалась', 6),
  neuterPast: Word('прибивалось', 6),
  pluralPast: Word('прибивались', 6),
  imperativeInformal: Word('прибивайся', 6),
  imperativeFormal: Word('прибивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прибиваться.name.text, прибиваться);

export { прибиваться };