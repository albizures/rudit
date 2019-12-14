import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const реэвакуироваться: PerfectVerb = {
  name: Word('реэвакуироваться', 7),
  singular1stPerson: Word('реэвакуируюсь', 7),
  singular2ndPerson: Word('реэвакуируешься', 7),
  singular3rdPerson: Word('реэвакуируется', 7),
  plural1stPerson: Word('реэвакуируемся', 7),
  plural2ndPerson: Word('реэвакуируетесь', 7),
  plural3rdPerson: Word('реэвакуируются', 7),
  masculinePast: Word('реэвакуировался', 7),
  femininePast: Word('реэвакуировалась', 7),
  neuterPast: Word('реэвакуировалось', 7),
  pluralPast: Word('реэвакуировались', 7),
  imperativeInformal: Word('реэвакуируйся', 7),
  imperativeFormal: Word('реэвакуируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(реэвакуироваться.name.text, реэвакуироваться);

export { реэвакуироваться };