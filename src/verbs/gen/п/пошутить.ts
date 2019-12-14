import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошутить: PerfectVerb = {
  name: Word('пошутить', 5),
  singular1stPerson: Word('пошучу', 5),
  singular2ndPerson: Word('пошутишь', 3),
  singular3rdPerson: Word('пошутит', 3),
  plural1stPerson: Word('пошутим', 3),
  plural2ndPerson: Word('пошутите', 3),
  plural3rdPerson: Word('пошутят', 3),
  masculinePast: Word('пошутил', 5),
  femininePast: Word('пошутила', 5),
  neuterPast: Word('пошутило', 5),
  pluralPast: Word('пошутили', 5),
  imperativeInformal: Word('пошути', 5),
  imperativeFormal: Word('пошутите', 5),
  imperfect: ['шутить'],
};

perfectVerbs.set(пошутить.name.text, пошутить);

export { пошутить };