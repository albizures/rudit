import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снабдить: PerfectVerb = {
  name: Word('снабдить', 5),
  singular1stPerson: Word('снабжу', 5),
  singular2ndPerson: Word('снабдишь', 5),
  singular3rdPerson: Word('снабдит', 5),
  plural1stPerson: Word('снабдим', 5),
  plural2ndPerson: Word('снабдите', 5),
  plural3rdPerson: Word('снабдят', 5),
  masculinePast: Word('снабдил', 5),
  femininePast: Word('снабдила', 5),
  neuterPast: Word('снабдило', 5),
  pluralPast: Word('снабдили', 5),
  imperativeInformal: Word('снабди', 5),
  imperativeFormal: Word('снабдите', 5),
  imperfect: [],
};

perfectVerbs.set(снабдить.name.text, снабдить);

export { снабдить };