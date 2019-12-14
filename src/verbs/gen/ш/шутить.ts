import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шутить: PerfectVerb = {
  name: Word('шутить', 3),
  singular1stPerson: Word('шучу', 3),
  singular2ndPerson: Word('шутишь', 1),
  singular3rdPerson: Word('шутит', 1),
  plural1stPerson: Word('шутим', 1),
  plural2ndPerson: Word('шутите', 1),
  plural3rdPerson: Word('шутят', 1),
  masculinePast: Word('шутил', 3),
  femininePast: Word('шутила', 3),
  neuterPast: Word('шутило', 3),
  pluralPast: Word('шутили', 3),
  imperativeInformal: Word('шути', 3),
  imperativeFormal: Word('шутите', 3),
  imperfect: ['пошутить'],
};

perfectVerbs.set(шутить.name.text, шутить);

export { шутить };