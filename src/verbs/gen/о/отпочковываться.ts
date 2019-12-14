import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпочковываться: PerfectVerb = {
  name: Word('отпочковываться', 6),
  singular1stPerson: Word('отпочковываюсь', 6),
  singular2ndPerson: Word('отпочковываешься', 6),
  singular3rdPerson: Word('отпочковывается', 6),
  plural1stPerson: Word('отпочковываемся', 6),
  plural2ndPerson: Word('отпочковываетесь', 6),
  plural3rdPerson: Word('отпочковываются', 6),
  masculinePast: Word('отпочковывался', 6),
  femininePast: Word('отпочковывалась', 6),
  neuterPast: Word('отпочковывалось', 6),
  pluralPast: Word('отпочковывались', 6),
  imperativeInformal: Word('отпочковывайся', 6),
  imperativeFormal: Word('отпочковывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(отпочковываться.name.text, отпочковываться);

export { отпочковываться };