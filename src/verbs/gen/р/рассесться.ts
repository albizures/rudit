import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассесться: PerfectVerb = {
  name: Word('рассесться', 4),
  singular1stPerson: Word('рассядусь', 4),
  singular2ndPerson: Word('рассядешься', 4),
  singular3rdPerson: Word('рассядется', 4),
  plural1stPerson: Word('рассядемся', 4),
  plural2ndPerson: Word('рассядетесь', 4),
  plural3rdPerson: Word('рассядутся', 4),
  masculinePast: Word('расселся', 4),
  femininePast: Word('расселась', 4),
  neuterPast: Word('расселось', 4),
  pluralPast: Word('расселись', 4),
  imperativeInformal: Word('рассядься', 4),
  imperativeFormal: Word('рассядьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(рассесться.name.text, рассесться);

export { рассесться };