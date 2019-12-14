import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрываться: PerfectVerb = {
  name: Word('разрываться', 6),
  singular1stPerson: Word('разрываюсь', 6),
  singular2ndPerson: Word('разрываешься', 6),
  singular3rdPerson: Word('разрывается', 6),
  plural1stPerson: Word('разрываемся', 6),
  plural2ndPerson: Word('разрываетесь', 6),
  plural3rdPerson: Word('разрываются', 6),
  masculinePast: Word('разрывался', 6),
  femininePast: Word('разрывалась', 6),
  neuterPast: Word('разрывалось', 6),
  pluralPast: Word('разрывались', 6),
  imperativeInformal: Word('разрывайся', 6),
  imperativeFormal: Word('разрывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрываться.name.text, разрываться);

export { разрываться };