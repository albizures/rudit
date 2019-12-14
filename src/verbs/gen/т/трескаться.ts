import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трескаться: PerfectVerb = {
  name: Word('трескаться', 2),
  singular1stPerson: Word('трескаюсь', 2),
  singular2ndPerson: Word('трескаешься', 2),
  singular3rdPerson: Word('трескается', 2),
  plural1stPerson: Word('трескаемся', 2),
  plural2ndPerson: Word('трескаетесь', 2),
  plural3rdPerson: Word('трескаются', 2),
  masculinePast: Word('трескался', 2),
  femininePast: Word('трескалась', 2),
  neuterPast: Word('трескалось', 2),
  pluralPast: Word('трескались', 2),
  imperativeInformal: Word('трескайся', 2),
  imperativeFormal: Word('трескайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(трескаться.name.text, трескаться);

export { трескаться };