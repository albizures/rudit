import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расширяться: PerfectVerb = {
  name: Word('расширяться', 6),
  singular1stPerson: Word('расширяюсь', 6),
  singular2ndPerson: Word('расширяешься', 6),
  singular3rdPerson: Word('расширяется', 6),
  plural1stPerson: Word('расширяемся', 6),
  plural2ndPerson: Word('расширяетесь', 6),
  plural3rdPerson: Word('расширяются', 6),
  masculinePast: Word('расширялся', 6),
  femininePast: Word('расширялась', 6),
  neuterPast: Word('расширялось', 6),
  pluralPast: Word('расширялись', 6),
  imperativeInformal: Word('расширяйся', 6),
  imperativeFormal: Word('расширяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(расширяться.name.text, расширяться);

export { расширяться };