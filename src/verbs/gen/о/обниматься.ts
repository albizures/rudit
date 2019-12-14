import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обниматься: PerfectVerb = {
  name: Word('обниматься', 5),
  singular1stPerson: Word('обнимаюсь', 5),
  singular2ndPerson: Word('обнимаешься', 5),
  singular3rdPerson: Word('обнимается', 5),
  plural1stPerson: Word('обнимаемся', 5),
  plural2ndPerson: Word('обнимаетесь', 5),
  plural3rdPerson: Word('обнимаются', 5),
  masculinePast: Word('обнимался', 5),
  femininePast: Word('обнималась', 5),
  neuterPast: Word('обнималось', 5),
  pluralPast: Word('обнимались', 5),
  imperativeInformal: Word('обнимайся', 5),
  imperativeFormal: Word('обнимайтесь', 5),
  imperfect: ['обняться'],
};

perfectVerbs.set(обниматься.name.text, обниматься);

export { обниматься };