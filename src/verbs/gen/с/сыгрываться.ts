import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыгрываться: PerfectVerb = {
  name: Word('сыгрываться', 1),
  singular1stPerson: Word('сыгрываюсь', 1),
  singular2ndPerson: Word('сыгрываешься', 1),
  singular3rdPerson: Word('сыгрывается', 1),
  plural1stPerson: Word('сыгрываемся', 1),
  plural2ndPerson: Word('сыгрываетесь', 1),
  plural3rdPerson: Word('сыгрываются', 1),
  masculinePast: Word('сыгрывался', 1),
  femininePast: Word('сыгрывалась', 1),
  neuterPast: Word('сыгрывалось', 1),
  pluralPast: Word('сыгрывались', 1),
  imperativeInformal: Word('сыгрывайся', 1),
  imperativeFormal: Word('сыгрывайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(сыгрываться.name.text, сыгрываться);

export { сыгрываться };