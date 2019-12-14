import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ущемить: PerfectVerb = {
  name: Word('ущемить', 4),
  singular1stPerson: Word('ущемлю', 5),
  singular2ndPerson: Word('ущемишь', 4),
  singular3rdPerson: Word('ущемит', 4),
  plural1stPerson: Word('ущемим', 4),
  plural2ndPerson: Word('ущемите', 4),
  plural3rdPerson: Word('ущемят', 4),
  masculinePast: Word('ущемил', 4),
  femininePast: Word('ущемила', 4),
  neuterPast: Word('ущемило', 4),
  pluralPast: Word('ущемили', 4),
  imperativeInformal: Word('ущеми', 4),
  imperativeFormal: Word('ущемите', 4),
  imperfect: [],
};

perfectVerbs.set(ущемить.name.text, ущемить);

export { ущемить };