import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окатываться: PerfectVerb = {
  name: Word('окатываться', 2),
  singular1stPerson: Word('окатываюсь', 2),
  singular2ndPerson: Word('окатываешься', 2),
  singular3rdPerson: Word('окатывается', 2),
  plural1stPerson: Word('окатываемся', 2),
  plural2ndPerson: Word('окатываетесь', 2),
  plural3rdPerson: Word('окатываются', 2),
  masculinePast: Word('окатывался', 2),
  femininePast: Word('окатывалась', 2),
  neuterPast: Word('окатывалось', 2),
  pluralPast: Word('окатывались', 2),
  imperativeInformal: Word('окатывайся', 2),
  imperativeFormal: Word('окатывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окатываться.name.text, окатываться);

export { окатываться };