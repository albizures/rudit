import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввалить: PerfectVerb = {
  name: Word('ввалить', 4),
  singular1stPerson: Word('ввалю', 4),
  singular2ndPerson: Word('ввалишь', 2),
  singular3rdPerson: Word('ввалит', 2),
  plural1stPerson: Word('ввалим', 2),
  plural2ndPerson: Word('ввалите', 2),
  plural3rdPerson: Word('ввалят', 2),
  masculinePast: Word('ввалил', 4),
  femininePast: Word('ввалила', 4),
  neuterPast: Word('ввалило', 4),
  pluralPast: Word('ввалили', 4),
  imperativeInformal: Word('ввали', 4),
  imperativeFormal: Word('ввалите', 4),
  imperfect: [],
};

perfectVerbs.set(ввалить.name.text, ввалить);

export { ввалить };