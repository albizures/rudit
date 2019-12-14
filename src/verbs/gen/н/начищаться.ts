import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начищаться: PerfectVerb = {
  name: Word('начищаться', 5),
  singular1stPerson: Word('начищаюсь', 5),
  singular2ndPerson: Word('начищаешься', 5),
  singular3rdPerson: Word('начищается', 5),
  plural1stPerson: Word('начищаемся', 5),
  plural2ndPerson: Word('начищаетесь', 5),
  plural3rdPerson: Word('начищаются', 5),
  masculinePast: Word('начищался', 5),
  femininePast: Word('начищалась', 5),
  neuterPast: Word('начищалось', 5),
  pluralPast: Word('начищались', 5),
  imperativeInformal: Word('начищайся', 5),
  imperativeFormal: Word('начищайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(начищаться.name.text, начищаться);

export { начищаться };