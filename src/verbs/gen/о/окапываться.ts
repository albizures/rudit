import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окапываться: PerfectVerb = {
  name: Word('окапываться', 2),
  singular1stPerson: Word('окапываюсь', 2),
  singular2ndPerson: Word('окапываешься', 2),
  singular3rdPerson: Word('окапывается', 2),
  plural1stPerson: Word('окапываемся', 2),
  plural2ndPerson: Word('окапываетесь', 2),
  plural3rdPerson: Word('окапываются', 2),
  masculinePast: Word('окапывался', 2),
  femininePast: Word('окапывалась', 2),
  neuterPast: Word('окапывалось', 2),
  pluralPast: Word('окапывались', 2),
  imperativeInformal: Word('окапывайся', 2),
  imperativeFormal: Word('окапывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окапываться.name.text, окапываться);

export { окапываться };