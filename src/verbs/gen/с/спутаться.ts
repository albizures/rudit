import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спутаться: PerfectVerb = {
  name: Word('спутаться', 2),
  singular1stPerson: Word('спутаюсь', 2),
  singular2ndPerson: Word('спутаешься', 2),
  singular3rdPerson: Word('спутается', 2),
  plural1stPerson: Word('спутаемся', 2),
  plural2ndPerson: Word('спутаетесь', 2),
  plural3rdPerson: Word('спутаются', 2),
  masculinePast: Word('спутался', 2),
  femininePast: Word('спуталась', 2),
  neuterPast: Word('спуталось', 2),
  pluralPast: Word('спутались', 2),
  imperativeInformal: Word('спутайся', 2),
  imperativeFormal: Word('спутайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(спутаться.name.text, спутаться);

export { спутаться };