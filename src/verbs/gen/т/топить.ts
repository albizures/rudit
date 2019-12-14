import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const топить: PerfectVerb = {
  name: Word('топить', 3),
  singular1stPerson: Word('топлю', 4),
  singular2ndPerson: Word('топишь', 1),
  singular3rdPerson: Word('топит', 1),
  plural1stPerson: Word('топим', 1),
  plural2ndPerson: Word('топите', 1),
  plural3rdPerson: Word('топят', 1),
  masculinePast: Word('топил', 3),
  femininePast: Word('топила', 3),
  neuterPast: Word('топило', 3),
  pluralPast: Word('топили', 3),
  imperativeInformal: Word('топи', 3),
  imperativeFormal: Word('топите', 3),
  imperfect: ['истопить','натопить'],
};

perfectVerbs.set(топить.name.text, топить);

export { топить };