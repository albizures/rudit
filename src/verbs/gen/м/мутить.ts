import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мутить: PerfectVerb = {
  name: Word('мутить', 3),
  singular1stPerson: Word('мучу', 3),
  singular2ndPerson: Word('мутишь', 3),
  singular3rdPerson: Word('мутит', 3),
  plural1stPerson: Word('мутим', 3),
  plural2ndPerson: Word('мутите', 3),
  plural3rdPerson: Word('мутят', 3),
  masculinePast: Word('мутил', 3),
  femininePast: Word('мутила', 3),
  neuterPast: Word('мутило', 3),
  pluralPast: Word('мутили', 3),
  imperativeInformal: Word('мути', 3),
  imperativeFormal: Word('мутите', 3),
  imperfect: [],
};

perfectVerbs.set(мутить.name.text, мутить);

export { мутить };