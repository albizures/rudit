import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заниматься: PerfectVerb = {
  name: Word('заниматься', 5),
  singular1stPerson: Word('занимаюсь', 5),
  singular2ndPerson: Word('занимаешься', 5),
  singular3rdPerson: Word('занимается', 5),
  plural1stPerson: Word('занимаемся', 5),
  plural2ndPerson: Word('занимаетесь', 5),
  plural3rdPerson: Word('занимаются', 5),
  masculinePast: Word('занимался', 5),
  femininePast: Word('занималась', 5),
  neuterPast: Word('занималось', 5),
  pluralPast: Word('занимались', 5),
  imperativeInformal: Word('занимайся', 5),
  imperativeFormal: Word('занимайтесь', 5),
  imperfect: ['заняться'],
};

perfectVerbs.set(заниматься.name.text, заниматься);

export { заниматься };