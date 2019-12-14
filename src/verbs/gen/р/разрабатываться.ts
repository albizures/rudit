import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрабатываться: PerfectVerb = {
  name: Word('разрабатываться', 6),
  singular1stPerson: Word('разрабатываюсь', 6),
  singular2ndPerson: Word('разрабатываешься', 6),
  singular3rdPerson: Word('разрабатывается', 6),
  plural1stPerson: Word('разрабатываемся', 6),
  plural2ndPerson: Word('разрабатываетесь', 6),
  plural3rdPerson: Word('разрабатываются', 6),
  masculinePast: Word('разрабатывался', 6),
  femininePast: Word('разрабатывалась', 6),
  neuterPast: Word('разрабатывалось', 6),
  pluralPast: Word('разрабатывались', 6),
  imperativeInformal: Word('разрабатывайся', 6),
  imperativeFormal: Word('разрабатывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрабатываться.name.text, разрабатываться);

export { разрабатываться };