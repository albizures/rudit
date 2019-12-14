import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предварять: PerfectVerb = {
  name: Word('предварять', 7),
  singular1stPerson: Word('предваряю', 7),
  singular2ndPerson: Word('предваряешь', 7),
  singular3rdPerson: Word('предваряет', 7),
  plural1stPerson: Word('предваряем', 7),
  plural2ndPerson: Word('предваряете', 7),
  plural3rdPerson: Word('предваряют', 7),
  masculinePast: Word('предварял', 7),
  femininePast: Word('предваряла', 7),
  neuterPast: Word('предваряло', 7),
  pluralPast: Word('предваряли', 7),
  imperativeInformal: Word('предваряй', 7),
  imperativeFormal: Word('предваряйте', 7),
  imperfect: [],
};

perfectVerbs.set(предварять.name.text, предварять);

export { предварять };