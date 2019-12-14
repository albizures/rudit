import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кутить: PerfectVerb = {
  name: Word('кутить', 3),
  singular1stPerson: Word('кучу', 3),
  singular2ndPerson: Word('кутишь', 3),
  singular3rdPerson: Word('кутит', 3),
  plural1stPerson: Word('кутим', 3),
  plural2ndPerson: Word('кутите', 3),
  plural3rdPerson: Word('кутят', 3),
  masculinePast: Word('кутил', 3),
  femininePast: Word('кутила', 3),
  neuterPast: Word('кутило', 3),
  pluralPast: Word('кутили', 3),
  imperativeInformal: Word('кути', 3),
  imperativeFormal: Word('кутите', 3),
  imperfect: ['кутнуть','покутить'],
};

perfectVerbs.set(кутить.name.text, кутить);

export { кутить };