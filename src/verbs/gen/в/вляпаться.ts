import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вляпаться: PerfectVerb = {
  name: Word('вляпаться', 2),
  singular1stPerson: Word('вляпаюсь', 2),
  singular2ndPerson: Word('вляпаешься', 2),
  singular3rdPerson: Word('вляпается', 2),
  plural1stPerson: Word('вляпаемся', 2),
  plural2ndPerson: Word('вляпаетесь', 2),
  plural3rdPerson: Word('вляпаются', 2),
  masculinePast: Word('вляпался', 2),
  femininePast: Word('вляпалась', 2),
  neuterPast: Word('вляпалось', 2),
  pluralPast: Word('вляпались', 2),
  imperativeInformal: Word('вляпайся', 2),
  imperativeFormal: Word('вляпайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(вляпаться.name.text, вляпаться);

export { вляпаться };