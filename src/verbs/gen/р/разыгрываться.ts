import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разыгрываться: PerfectVerb = {
  name: Word('разыгрываться', 3),
  singular1stPerson: Word('разыгрываюсь', 3),
  singular2ndPerson: Word('разыгрываешься', 3),
  singular3rdPerson: Word('разыгрывается', 3),
  plural1stPerson: Word('разыгрываемся', 3),
  plural2ndPerson: Word('разыгрываетесь', 3),
  plural3rdPerson: Word('разыгрываются', 3),
  masculinePast: Word('разыгрывался', 3),
  femininePast: Word('разыгрывалась', 3),
  neuterPast: Word('разыгрывалось', 3),
  pluralPast: Word('разыгрывались', 3),
  imperativeInformal: Word('разыгрывайся', 3),
  imperativeFormal: Word('разыгрывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(разыгрываться.name.text, разыгрываться);

export { разыгрываться };