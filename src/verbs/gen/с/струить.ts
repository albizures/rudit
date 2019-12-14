import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const струить: PerfectVerb = {
  name: Word('струить', 4),
  singular1stPerson: Word('струю', 4),
  singular2ndPerson: Word('струишь', 4),
  singular3rdPerson: Word('струит', 4),
  plural1stPerson: Word('струим', 4),
  plural2ndPerson: Word('струите', 4),
  plural3rdPerson: Word('струят', 4),
  masculinePast: Word('струил', 4),
  femininePast: Word('струила', 4),
  neuterPast: Word('струило', 4),
  pluralPast: Word('струили', 4),
  imperativeInformal: Word('струи', 4),
  imperativeFormal: Word('струите', 4),
  imperfect: [],
};

perfectVerbs.set(струить.name.text, струить);

export { струить };