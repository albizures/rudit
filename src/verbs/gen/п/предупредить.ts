import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предупредить: PerfectVerb = {
  name: Word('предупредить', 9),
  singular1stPerson: Word('предупрежу', 9),
  singular2ndPerson: Word('предупредишь', 9),
  singular3rdPerson: Word('предупредит', 9),
  plural1stPerson: Word('предупредим', 9),
  plural2ndPerson: Word('предупредите', 9),
  plural3rdPerson: Word('предупредят', 9),
  masculinePast: Word('предупредил', 9),
  femininePast: Word('предупредила', 9),
  neuterPast: Word('предупредило', 9),
  pluralPast: Word('предупредили', 9),
  imperativeInformal: Word('предупреди', 9),
  imperativeFormal: Word('предупредите', 9),
  imperfect: ['предупреждать'],
};

perfectVerbs.set(предупредить.name.text, предупредить);

export { предупредить };