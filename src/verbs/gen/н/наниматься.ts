import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наниматься: PerfectVerb = {
  name: Word('наниматься', 5),
  singular1stPerson: Word('нанимаюсь', 5),
  singular2ndPerson: Word('нанимаешься', 5),
  singular3rdPerson: Word('нанимается', 5),
  plural1stPerson: Word('нанимаемся', 5),
  plural2ndPerson: Word('нанимаетесь', 5),
  plural3rdPerson: Word('нанимаются', 5),
  masculinePast: Word('нанимался', 5),
  femininePast: Word('нанималась', 5),
  neuterPast: Word('нанималось', 5),
  pluralPast: Word('нанимались', 5),
  imperativeInformal: Word('нанимайся', 5),
  imperativeFormal: Word('нанимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(наниматься.name.text, наниматься);

export { наниматься };