import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const морозить: PerfectVerb = {
  name: Word('морозить', 3),
  singular1stPerson: Word('морожу', 3),
  singular2ndPerson: Word('морозишь', 3),
  singular3rdPerson: Word('морозит', 3),
  plural1stPerson: Word('морозим', 3),
  plural2ndPerson: Word('морозите', 3),
  plural3rdPerson: Word('морозят', 3),
  masculinePast: Word('морозил', 3),
  femininePast: Word('морозила', 3),
  neuterPast: Word('морозило', 3),
  pluralPast: Word('морозили', 3),
  imperativeInformal: Word('морозь', 3),
  imperativeFormal: Word('морозьте', 3),
  imperfect: ['заморозить'],
};

perfectVerbs.set(морозить.name.text, морозить);

export { морозить };