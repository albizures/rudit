import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очухаться: PerfectVerb = {
  name: Word('очухаться', 2),
  singular1stPerson: Word('очухаюсь', 2),
  singular2ndPerson: Word('очухаешься', 2),
  singular3rdPerson: Word('очухается', 2),
  plural1stPerson: Word('очухаемся', 2),
  plural2ndPerson: Word('очухаетесь', 2),
  plural3rdPerson: Word('очухаются', 2),
  masculinePast: Word('очухался', 2),
  femininePast: Word('очухалась', 2),
  neuterPast: Word('очухалось', 2),
  pluralPast: Word('очухались', 2),
  imperativeInformal: Word('очухайся', 2),
  imperativeFormal: Word('очухайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(очухаться.name.text, очухаться);

export { очухаться };