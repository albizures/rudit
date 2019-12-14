import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцыганить: PerfectVerb = {
  name: Word('выцыганить', 1),
  singular1stPerson: Word('выцыганю', 1),
  singular2ndPerson: Word('выцыганишь', 1),
  singular3rdPerson: Word('выцыганит', 1),
  plural1stPerson: Word('выцыганим', 1),
  plural2ndPerson: Word('выцыганите', 1),
  plural3rdPerson: Word('выцыганят', 1),
  masculinePast: Word('выцыганил', 1),
  femininePast: Word('выцыганила', 1),
  neuterPast: Word('выцыганило', 1),
  pluralPast: Word('выцыганили', 1),
  imperativeInformal: Word('выцыгань', 1),
  imperativeFormal: Word('выцыганьте', 1),
  imperfect: [],
};

perfectVerbs.set(выцыганить.name.text, выцыганить);

export { выцыганить };