import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплыться: PerfectVerb = {
  name: Word('расплыться', 5),
  singular1stPerson: Word('расплывусь', 7),
  singular2ndPerson: Word('расплывёшься', 7),
  singular3rdPerson: Word('расплывётся', 7),
  plural1stPerson: Word('расплывёмся', 7),
  plural2ndPerson: Word('расплывётесь', 7),
  plural3rdPerson: Word('расплывутся', 7),
  masculinePast: Word('расплылся', 5),
  femininePast: Word('расплылась', 7),
  neuterPast: Word('расплылось//расплыло'сь', 5),
  pluralPast: Word('расплылись//расплыли'сь', 5),
  imperativeInformal: Word('расплывись', 7),
  imperativeFormal: Word('расплывитесь', 7),
  imperfect: [],
};

perfectVerbs.set(расплыться.name.text, расплыться);

export { расплыться };