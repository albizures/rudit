import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сниматься: PerfectVerb = {
  name: Word('сниматься', 4),
  singular1stPerson: Word('снимаюсь', 4),
  singular2ndPerson: Word('снимаешься', 4),
  singular3rdPerson: Word('снимается', 4),
  plural1stPerson: Word('снимаемся', 4),
  plural2ndPerson: Word('снимаетесь', 4),
  plural3rdPerson: Word('снимаются', 4),
  masculinePast: Word('снимался', 4),
  femininePast: Word('снималась', 4),
  neuterPast: Word('снималось', 4),
  pluralPast: Word('снимались', 4),
  imperativeInformal: Word('снимайся', 4),
  imperativeFormal: Word('снимайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сниматься.name.text, сниматься);

export { сниматься };