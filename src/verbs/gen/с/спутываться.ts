import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спутываться: PerfectVerb = {
  name: Word('спутываться', 2),
  singular1stPerson: Word('спутываюсь', 2),
  singular2ndPerson: Word('спутываешься', 2),
  singular3rdPerson: Word('спутывается', 2),
  plural1stPerson: Word('спутываемся', 2),
  plural2ndPerson: Word('спутываетесь', 2),
  plural3rdPerson: Word('спутываются', 2),
  masculinePast: Word('спутывался', 2),
  femininePast: Word('спутывалась', 2),
  neuterPast: Word('спутывалось', 2),
  pluralPast: Word('спутывались', 2),
  imperativeInformal: Word('спутывайся', 2),
  imperativeFormal: Word('спутывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(спутываться.name.text, спутываться);

export { спутываться };