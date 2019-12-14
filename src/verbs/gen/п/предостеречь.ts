import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предостеречь: PerfectVerb = {
  name: Word('предостеречь', 9),
  singular1stPerson: Word('предостерегу', 11),
  singular2ndPerson: Word('предостережёшь', 11),
  singular3rdPerson: Word('предостережёт', 11),
  plural1stPerson: Word('предостережём', 11),
  plural2ndPerson: Word('предостережёте', 11),
  plural3rdPerson: Word('предостерегут', 11),
  masculinePast: Word('предостерёг', 9),
  femininePast: Word('предостерегла', 12),
  neuterPast: Word('предостерегло', 12),
  pluralPast: Word('предостерегли', 12),
  imperativeInformal: Word('предостереги', 11),
  imperativeFormal: Word('предостерегите', 11),
  imperfect: ['предостерегать'],
};

perfectVerbs.set(предостеречь.name.text, предостеречь);

export { предостеречь };