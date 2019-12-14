import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересниматься: PerfectVerb = {
  name: Word('пересниматься', 8),
  singular1stPerson: Word('переснимаюсь', 8),
  singular2ndPerson: Word('переснимаешься', 8),
  singular3rdPerson: Word('переснимается', 8),
  plural1stPerson: Word('переснимаемся', 8),
  plural2ndPerson: Word('переснимаетесь', 8),
  plural3rdPerson: Word('переснимаются', 8),
  masculinePast: Word('переснимался', 8),
  femininePast: Word('переснималась', 8),
  neuterPast: Word('переснималось', 8),
  pluralPast: Word('переснимались', 8),
  imperativeInformal: Word('переснимайся', 8),
  imperativeFormal: Word('переснимайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(пересниматься.name.text, пересниматься);

export { пересниматься };