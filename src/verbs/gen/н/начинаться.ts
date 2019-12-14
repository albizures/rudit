import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начинаться: PerfectVerb = {
  name: Word('начинаться', 5),
  singular1stPerson: Word('начинаюсь', 5),
  singular2ndPerson: Word('начинаешься', 5),
  singular3rdPerson: Word('начинается', 5),
  plural1stPerson: Word('начинаемся', 5),
  plural2ndPerson: Word('начинаетесь', 5),
  plural3rdPerson: Word('начинаются', 5),
  masculinePast: Word('начинался', 5),
  femininePast: Word('начиналась', 5),
  neuterPast: Word('начиналось', 5),
  pluralPast: Word('начинались', 5),
  imperativeInformal: Word('начинайся', 5),
  imperativeFormal: Word('начинайтесь', 5),
  imperfect: ['начаться'],
};

perfectVerbs.set(начинаться.name.text, начинаться);

export { начинаться };