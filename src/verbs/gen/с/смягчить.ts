import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смягчить: PerfectVerb = {
  name: Word('смягчить', 5),
  singular1stPerson: Word('смягчу', 5),
  singular2ndPerson: Word('смягчишь', 5),
  singular3rdPerson: Word('смягчит', 5),
  plural1stPerson: Word('смягчим', 5),
  plural2ndPerson: Word('смягчите', 5),
  plural3rdPerson: Word('смягчат', 5),
  masculinePast: Word('смягчил', 5),
  femininePast: Word('смягчила', 5),
  neuterPast: Word('смягчило', 5),
  pluralPast: Word('смягчили', 5),
  imperativeInformal: Word('смягчи', 5),
  imperativeFormal: Word('смягчите', 5),
  imperfect: ['смягчать'],
};

perfectVerbs.set(смягчить.name.text, смягчить);

export { смягчить };