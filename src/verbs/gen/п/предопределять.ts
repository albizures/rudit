import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предопределять: PerfectVerb = {
  name: Word('предопределять', 11),
  singular1stPerson: Word('предопределяю', 11),
  singular2ndPerson: Word('предопределяешь', 11),
  singular3rdPerson: Word('предопределяет', 11),
  plural1stPerson: Word('предопределяем', 11),
  plural2ndPerson: Word('предопределяете', 11),
  plural3rdPerson: Word('предопределяют', 11),
  masculinePast: Word('предопределял', 11),
  femininePast: Word('предопределяла', 11),
  neuterPast: Word('предопределяло', 11),
  pluralPast: Word('предопределяли', 11),
  imperativeInformal: Word('предопределяй', 11),
  imperativeFormal: Word('предопределяйте', 11),
  imperfect: [],
};

perfectVerbs.set(предопределять.name.text, предопределять);

export { предопределять };