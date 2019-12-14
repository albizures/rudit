import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подниматься: PerfectVerb = {
  name: Word('подниматься', 6),
  singular1stPerson: Word('поднимаюсь', 6),
  singular2ndPerson: Word('поднимаешься', 6),
  singular3rdPerson: Word('поднимается', 6),
  plural1stPerson: Word('поднимаемся', 6),
  plural2ndPerson: Word('поднимаетесь', 6),
  plural3rdPerson: Word('поднимаются', 6),
  masculinePast: Word('поднимался', 6),
  femininePast: Word('поднималась', 6),
  neuterPast: Word('поднималось', 6),
  pluralPast: Word('поднимались', 6),
  imperativeInformal: Word('поднимайся', 6),
  imperativeFormal: Word('поднимайтесь', 6),
  imperfect: ['подняться'],
};

perfectVerbs.set(подниматься.name.text, подниматься);

export { подниматься };