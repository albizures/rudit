import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цыганить: PerfectVerb = {
  name: Word('цыганить', 3),
  singular1stPerson: Word('цыганю', 3),
  singular2ndPerson: Word('цыганишь', 3),
  singular3rdPerson: Word('цыганит', 3),
  plural1stPerson: Word('цыганим', 3),
  plural2ndPerson: Word('цыганите', 3),
  plural3rdPerson: Word('цыганят', 3),
  masculinePast: Word('цыганил', 3),
  femininePast: Word('цыганила', 3),
  neuterPast: Word('цыганило', 3),
  pluralPast: Word('цыганили', 3),
  imperativeInformal: Word('цыгань', 3),
  imperativeFormal: Word('цыганьте', 3),
  imperfect: [],
};

perfectVerbs.set(цыганить.name.text, цыганить);

export { цыганить };