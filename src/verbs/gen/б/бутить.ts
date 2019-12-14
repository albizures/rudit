import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бутить: PerfectVerb = {
  name: Word('бутить', 3),
  singular1stPerson: Word('бучу', 3),
  singular2ndPerson: Word('бутишь', 3),
  singular3rdPerson: Word('бутит', 3),
  plural1stPerson: Word('бутим', 3),
  plural2ndPerson: Word('бутите', 3),
  plural3rdPerson: Word('бутят', 3),
  masculinePast: Word('бутил', 3),
  femininePast: Word('бутила', 3),
  neuterPast: Word('бутило', 3),
  pluralPast: Word('бутили', 3),
  imperativeInformal: Word('бути', 3),
  imperativeFormal: Word('бутите', 3),
  imperfect: [],
};

perfectVerbs.set(бутить.name.text, бутить);

export { бутить };