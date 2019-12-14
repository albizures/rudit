import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смутить: PerfectVerb = {
  name: Word('смутить', 4),
  singular1stPerson: Word('смучу', 4),
  singular2ndPerson: Word('смутишь', 4),
  singular3rdPerson: Word('смутит', 4),
  plural1stPerson: Word('смутим', 4),
  plural2ndPerson: Word('смутите', 4),
  plural3rdPerson: Word('смутят', 4),
  masculinePast: Word('смутил', 4),
  femininePast: Word('смутила', 4),
  neuterPast: Word('смутило', 4),
  pluralPast: Word('смутили', 4),
  imperativeInformal: Word('смути', 4),
  imperativeFormal: Word('смутите', 4),
  imperfect: ['смущать'],
};

perfectVerbs.set(смутить.name.text, смутить);

export { смутить };