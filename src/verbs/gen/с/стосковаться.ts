import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стосковаться: PerfectVerb = {
  name: Word('стосковаться', 7),
  singular1stPerson: Word('стоскуюсь', 5),
  singular2ndPerson: Word('стоскуешься', 5),
  singular3rdPerson: Word('стоскуется', 5),
  plural1stPerson: Word('стоскуемся', 5),
  plural2ndPerson: Word('стоскуетесь', 5),
  plural3rdPerson: Word('стоскуются', 5),
  masculinePast: Word('стосковался', 7),
  femininePast: Word('стосковалась', 7),
  neuterPast: Word('стосковалось', 7),
  pluralPast: Word('стосковались', 7),
  imperativeInformal: Word('стоскуйся', 5),
  imperativeFormal: Word('стоскуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(стосковаться.name.text, стосковаться);

export { стосковаться };