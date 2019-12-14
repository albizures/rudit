import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разболеться: PerfectVerb = {
  name: Word('разболеться', 6),
  singular1stPerson: Word('разболеюсь', 6),
  singular2ndPerson: Word('разболеешься', 6),
  singular3rdPerson: Word('разболеется', 6),
  plural1stPerson: Word('разболеемся', 6),
  plural2ndPerson: Word('разболеетесь', 6),
  plural3rdPerson: Word('разболеются', 6),
  masculinePast: Word('разболелся', 6),
  femininePast: Word('разболелась', 6),
  neuterPast: Word('разболелось', 6),
  pluralPast: Word('разболелись', 6),
  imperativeInformal: Word('разболейся', 6),
  imperativeFormal: Word('разболейтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разболеться.name.text, разболеться);

export { разболеться };