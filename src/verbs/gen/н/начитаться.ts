import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начитаться: PerfectVerb = {
  name: Word('начитаться', 5),
  singular1stPerson: Word('начитаюсь', 5),
  singular2ndPerson: Word('начитаешься', 5),
  singular3rdPerson: Word('начитается', 5),
  plural1stPerson: Word('начитаемся', 5),
  plural2ndPerson: Word('начитаетесь', 5),
  plural3rdPerson: Word('начитаются', 5),
  masculinePast: Word('начитался', 5),
  femininePast: Word('начиталась', 5),
  neuterPast: Word('начиталось', 5),
  pluralPast: Word('начитались', 5),
  imperativeInformal: Word('начитайся', 5),
  imperativeFormal: Word('начитайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(начитаться.name.text, начитаться);

export { начитаться };